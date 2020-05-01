module.exports = {



    date(timestamp) {
        const birth = new Date(timestamp);

        const year = birth.getUTCFullYear();
        const month = `0${birth.getUTCMonth() + 1}`.slice(-2);
        const day = `0${birth.getUTCDate()}`.slice(-2);
        const hour = birth.getHours();
        const minutes = birth.getMinutes();


        return {
            year,
            month,
            day,
            hour,
            minutes,
            format:`${day}/${month}/${year}`,
            birthDay: `${day}/${month}`,
            iso:`${year}-${month}-${day}`
        }

    },
    formatPrice(price) {
        
        return new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency:'BRL'
        }).format(price/100)
    }

}
