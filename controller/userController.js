import { userList } from "../model/userModel.js"

export function userController(req,resp){
    let userData=userList();
    resp.render("user",{userData:userData});
    // console.log(userData);
    
};