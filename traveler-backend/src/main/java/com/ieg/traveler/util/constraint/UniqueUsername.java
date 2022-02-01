package com.ieg.traveler.util.constraint;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = { UniqueUsernameValidator.class})
public @interface UniqueUsername {

    String message() default "{traveler.constraints.UniqueUserName.message}";

    Class<?>[] groups() default { };

    Class<? extends Payload>[] payload() default { };

}
