import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { price_type } from './price-type.enum';

@InputType()
export class NestedEnumprice_typeFilter {

    @Field(() => price_type, {nullable:true})
    equals?: keyof typeof price_type;

    @Field(() => [price_type], {nullable:true})
    in?: Array<keyof typeof price_type>;

    @Field(() => [price_type], {nullable:true})
    notIn?: Array<keyof typeof price_type>;

    @Field(() => NestedEnumprice_typeFilter, {nullable:true})
    not?: NestedEnumprice_typeFilter;
}
