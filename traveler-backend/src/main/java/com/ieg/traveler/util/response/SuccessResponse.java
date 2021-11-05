package com.ieg.traveler.util.response;

public class SuccessResponse extends Response{

    public SuccessResponse() {
        super(true);
    }

    public SuccessResponse(final String message) {
        super(true, message);
    }

}
