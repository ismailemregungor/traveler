package com.ieg.traveler.util.response;

public class ErrorDataResponse<T> extends DataResponse<T>{

    public ErrorDataResponse() {
        super(null, false);
    }

    public ErrorDataResponse(final String message) {
        super(null, false, message);
    }

    public ErrorDataResponse(final T data) {
        super(data, false);
    }

    public ErrorDataResponse(final T data, final String message) {
        super(data, false, message);
    }

}
