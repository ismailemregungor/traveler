package com.ieg.traveler.util.response;

public class ErrorResponse extends Response {

    public ErrorResponse() {
        super(false);
    }

    public ErrorResponse(final String message) {
        super(false, message);
    }

}
