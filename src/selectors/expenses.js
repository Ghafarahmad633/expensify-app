import moment from 'moment'

// Get Visible

export default(expenses,{text,sortBy,startDate,endDate})=>{

    return expenses.filter((exepnse)=>{
        const createdAtMoment=moment(exepnse.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day'):true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day'):true

        const textmatch = exepnse.desc.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textmatch


    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt?1:-1
        }
        else if(sortBy==='amount'){
            return a.amount<b.amount?1:-1
        }
    })

}