package com.ieg.traveler.util.response;

public class Response {

    private final boolean success;
    private String message;

    public Response(final boolean success) {
        this.success = success;
    }

    public Response(final boolean success, final String message) {
        this(success);
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public boolean isSuccess() {
        return success;
    }

}
