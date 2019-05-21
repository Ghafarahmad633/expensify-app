import moment from "moment";

export default [
    {
        id:"1",
        desc:"Rent",
        note:"This is home rent",
        amount:1000,
        createdAt:0
    },
    {
        id:"2",
        desc:"Gum",
        note:"This is Gum expense",
        amount:1800,
        createdAt:moment(0).subtract(4,'days').valueOf()
    },
    {
        id:"3",
        desc:"Fee",
        note:"This is School Fee",
        amount:3000,
        createdAt:moment(0).add(4,'days').valueOf()
    }
]
