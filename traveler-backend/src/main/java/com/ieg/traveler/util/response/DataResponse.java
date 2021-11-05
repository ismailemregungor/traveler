package com.ieg.traveler.util.response;

public class DataResponse<T> extends Response {

    private final T data;

    public DataResponse(final T data, final boolean success) {
        super(success);
        this.data = data;
    }

    public DataResponse(final T data, final boolean success, final String message) {
        super(success, message);
        this.data = data;
    }

    public T getData() {
        return data;
    }
}
