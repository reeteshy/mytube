const userControllder = {
    registerUser : (req, resp) => {
        console.log("Recieve Data", req.body)
        return resp.status(200).json(req.body)
    }
} 

export default userControllder