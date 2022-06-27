import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutCity_created_byTousersInput } from '../users/users-create-nested-one-without-city-created-by-tousers.input';
import { usersCreateNestedOneWithoutCity_updated_byTousersInput } from '../users/users-create-nested-one-without-city-updated-by-tousers.input';
import { cityCreateNestedOneWithoutCity_parent_idTocityInput } from './city-create-nested-one-without-city-parent-id-tocity.input';
import { cityCreateNestedManyWithoutUsers_city_parent_idTousersInput } from './city-create-nested-many-without-users-city-parent-id-tousers.input';

@InputType()
export class cityCreateWithoutPost_city_idTocityInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutCity_created_byTousersInput, {nullable:true})
    users_city_created_byTousers?: usersCreateNestedOneWithoutCity_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutCity_updated_byTousersInput, {nullable:true})
    users_city_updated_byTousers?: usersCreateNestedOneWithoutCity_updated_byTousersInput;

    @Field(() => cityCreateNestedOneWithoutCity_parent_idTocityInput, {nullable:true})
    users_city_parent_idTousers?: cityCreateNestedOneWithoutCity_parent_idTocityInput;

    @Field(() => cityCreateNestedManyWithoutUsers_city_parent_idTousersInput, {nullable:true})
    city_parent_idTocity?: cityCreateNestedManyWithoutUsers_city_parent_idTousersInput;
}
