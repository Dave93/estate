import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { usersUpdateOneWithoutPost_post_created_byTousersInput } from '../users/users-update-one-without-post-post-created-by-tousers.input';
import { usersUpdateOneWithoutPost_updated_byTousersInput } from '../users/users-update-one-without-post-updated-by-tousers.input';
import { usersUpdateOneRequiredWithoutPost_post_user_idTousersInput } from '../users/users-update-one-required-without-post-post-user-id-tousers.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { Enumprice_typeFieldUpdateOperationsInput } from '../prisma/enumprice-type-field-update-operations.input';
import { EnumstatusFieldUpdateOperationsInput } from '../prisma/enumstatus-field-update-operations.input';
import { Enumsale_typeFieldUpdateOperationsInput } from '../prisma/enumsale-type-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';

@InputType()
export class postUpdateWithoutCity_city_idTocityInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => usersUpdateOneWithoutPost_post_created_byTousersInput, {nullable:true})
    users_post_created_byTousers?: usersUpdateOneWithoutPost_post_created_byTousersInput;

    @Field(() => usersUpdateOneWithoutPost_updated_byTousersInput, {nullable:true})
    users_post_updated_byTousers?: usersUpdateOneWithoutPost_updated_byTousersInput;

    @Field(() => usersUpdateOneRequiredWithoutPost_post_user_idTousersInput, {nullable:true})
    users_post_user_idTousers?: usersUpdateOneRequiredWithoutPost_post_user_idTousersInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => Enumprice_typeFieldUpdateOperationsInput, {nullable:true})
    price_type?: Enumprice_typeFieldUpdateOperationsInput;

    @Field(() => EnumstatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumstatusFieldUpdateOperationsInput;

    @Field(() => Enumsale_typeFieldUpdateOperationsInput, {nullable:true})
    sale_type?: Enumsale_typeFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    comments_count?: IntFieldUpdateOperationsInput;
}
