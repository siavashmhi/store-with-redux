const validateData = (data, type) => {

    const errors = {}

    if(type === 'signup') {
        
        if(!data.name.trim()) errors.name = 'username required'
        else delete errors.name

        if (!data.confirmPassword) {
            errors.confirmPassword = 'Please confirm password'
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = 'Password do not match'
        } else {
            delete errors.confirmPassword
        }

        if(data.isAccepted) delete errors.isAccepted
        else errors.isAccepted = 'accepted our regulations'
        
    }
    
    if(!data.email) errors.email = 'email required'
    else if(!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'email address is invalide'
    else delete errors.email

    if(!data.password) errors.password = 'password required'
    else if(data.password.length < 6) errors.password = 'Password is need to be 6 character or more'
    else delete errors.password

    return errors
}

export default validateData