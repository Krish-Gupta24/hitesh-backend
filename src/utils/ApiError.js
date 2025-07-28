class ApiError extends Error{
    constructer(
        statusCode,
        message = "Something went wrong",
        error = [],
        stack=""
    ) {
        this.message=message
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.error=this.error
        
    }
}

export{ApiError}