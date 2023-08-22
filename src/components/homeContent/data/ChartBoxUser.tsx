import { FaAccessibleIcon } from "react-icons/fa";

 
export const chartboxUser1 = {
    color:"white",
    icon: <FaAccessibleIcon/>,
    title:"Total Users",
    number:"10,000",
    datakey :"users",
    percentage: "45",
    viewAllRoute: "/users",
    dataChart :[
        {name:"Sun" ,users:100},
        {name:"Mon" ,users:600},
        {name:"Tue" ,users:300},
        {name:"Wed" ,users:450},
        {name:"Thur" ,users:1000},
        {name:"Fri" ,users:420},
        {name:"Sat" ,users:750}
    ],
};

export const chartboxUser2 = {
    color:"white",
    icon: <FaAccessibleIcon/>,
    title:"Total Products",
    number:"10,344",
    datakey :"product",
    percentage: "10",
    viewAllRoute: "/products",
    dataChart :[
        {name:"Sun" ,product:0},
        {name:"Mon" ,product:200},
        {name:"Tue" ,product:300},
        {name:"Wed" ,product:450},
        {name:"Thur" ,product:50},
        {name:"Fri" ,product:420},
        {name:"Sat" ,product:150}
    ],
};

export const chartboxUser3 = {
    color:"white",
    icon: <FaAccessibleIcon/>,
    title:"Total Comments",
    number:"15,344",
    datakey :"users",
    percentage: "-5",
    viewAllRoute: "/comments",
    dataChart :[
        {name:"Sun" ,users:500},
        {name:"Mon" ,users:200},
        {name:"Tue" ,users:300},
        {name:"Wed" ,users:450},
        {name:"Thur" ,users:1000},
        {name:"Fri" ,users:420},
        {name:"Sat" ,users:500}
    ],
};
export const chartboxUser4 = {
    color:"white",
    icon: <FaAccessibleIcon/>,
    title:"Total Posts",
    number:"10,344",
    datakey :"users",
    percentage: "10",
    viewAllRoute: "/posts",
    dataChart :[
        {name:"Sun" ,users:1000},
        {name:"Mon" ,users:500},
        {name:"Tue" ,users:300},
        {name:"Wed" ,users:400},
        {name:"Thur" ,users:750},
        {name:"Fri" ,users:220},
        {name:"Sat" ,users:350}
    ],
};

export const barChart = {
    title: "Bar",
    color:"#1A5D1A",
    datakey:"amount",
    chartData : [
        {name:"Sun" ,amount:1000},
        {name:"Mon" ,amount:500},
        {name:"Tue" ,amount:300},
        {name:"Wed" ,amount:400},
        {name:"Thur" ,amount:750},
        {name:"Fri" ,amount:220},
        {name:"Sat" ,amount:350}
    ]
};

export const barChart2 = {
    title: "Bar",
    color:"#F97B22",
    datakey:"amount",
    chartData : [
        {name:"Sun" ,amount:100},
        {name:"Mon" ,amount:500},
        {name:"Tue" ,amount:300},
        {name:"Wed" ,amount:50},
        {name:"Thur" ,amount:750},
        {name:"Fri" ,amount:220},
        {name:"Sat" ,amount:350}
    ]
}
