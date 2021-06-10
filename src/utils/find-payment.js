const findById = (id, data) => {
    return data.find(element => id === element._id)
}

export default findById;