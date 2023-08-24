import Person2Icon from '@mui/icons-material/Person2';
import CommentIcon from '@mui/icons-material/Comment';
import EmailIcon from '@mui/icons-material/Email';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

 
export const box1 = {
    color:"white",
    icon: <Person2Icon/>,
    title:"Total Users",
    number:"10,000",
    datakey :"users",
    percentage: "45",
    viewAllRoute: "/users",
}

export const box2 = {
    color:"white",
    icon: <ProductionQuantityLimitsIcon/>,
    title:"Total Products",
    number:"10,344",
    datakey :"product",
    percentage: "10",
    viewAllRoute: "/products",
    
};

export const box3 = {
    color:"white",
    icon: <CommentIcon/>,
    title:"Total Comments",
    number:"15,344",
    datakey :"users",
    percentage: "-5",
    viewAllRoute: "/comments",
    
};
export const box4 = {
    color:"white",
    icon: <EmailIcon/>,
    title:"Total Posts",
    number:"10,344",
    datakey :"users",
    percentage: "10",
    viewAllRoute: "/posts",
    
};
