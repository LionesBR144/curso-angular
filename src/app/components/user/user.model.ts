export interface User {
    id?: number;           
    fullName: string;       
    email: string;         
    password: string;      
    currentPassword?: string;
    newPassword?: string;      
  }