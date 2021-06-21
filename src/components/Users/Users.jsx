import React, {useEffect, useContext} from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { fetchUsers } from '../../actions/async/getUsers';
import { useSelector, useDispatch } from 'react-redux';
import SwitchButton from '../Button/SwitchButton';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import './Users.css'


const Users = () => {
    const { storeTheme, storeToggleTheme } = useContext(ThemeContext);

    const dispatch = useDispatch();
    
    const storeUsers = useSelector((state) => state.usersReducer.users);
    const storeLoading = useSelector((state) => state.usersReducer.isLoading)
    const storeError = useSelector((state) => state.usersReducer.error)

    useEffect(() => {
      dispatch(fetchUsers())
    }, [dispatch])

    if (storeLoading) {
      return <Loader/>
  }
  if (!storeLoading && storeError) {
      return <Error/>
  }
  
    return (
      <div className={storeTheme === 'light' ? 'users-container light' : 'users-container dark'}>
      <div className='header'>
        <h3 className='header-title'>Posts App</h3>
        <div className='switch-button'>
          <SwitchButton changeTheme = {storeToggleTheme}/>
        </div>
      </div>
      <div className={storeTheme === 'light' ? 'users light' : 'users dark'}>
        {storeUsers.map((user) => {
          return <div className='user' key={user.id}>{user.name}</div>;
        })}
      </div>
      </div>
    );
};

export default Users;