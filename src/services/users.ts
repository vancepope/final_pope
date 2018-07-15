import { Users } from '../models/users';

export class UsersService{
    private users: Users[] = [];

    //adds user
    addUser(name: string, email: string, phone: string, username: string, password: string){
        //Creates a new instance of user
        this.users.push(new Users(name,email,phone,username,password));
        
        //Prints users to console
        console.log(this.users);
    }
    //Adds users
    addUsers(user: Users[]){
        this.users.push(...user);
    }
    //Gets users
    getUsers(){
        return this.users.slice();
    }
    //Removes user as specified index
    removeUser(index: number){
        this.users.splice(index, 1);
    }
}