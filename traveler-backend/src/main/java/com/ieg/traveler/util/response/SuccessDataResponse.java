package com.ieg.traveler.util.response;

public class SuccessDataResponse<T> extends DataResponse<T>{

    public  SuccessDataResponse() {
        super(null, true);
    }

    public  SuccessDataResponse(final String message) {
        super(null, true, message);
    }

    public  SuccessDataResponse(final T data) {
        super(data, true);
    }

    public  SuccessDataResponse(final T data, final String message) {
        super(data, true, message);
    }

}
