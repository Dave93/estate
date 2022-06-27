import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { postCreateWithoutUsers_post_updated_byTousersInput } from './post-create-without-users-post-updated-by-tousers.input';

@InputType()
export class postCreateOrConnectWithoutUsers_post_updated_byTousersInput {

    @Field(() => postWhereUniqueInput, {nullable:false})
    @Type(() => postWhereUniqueInput)
    where!: postWhereUniqueInput;

    @Field(() => postCreateWithoutUsers_post_updated_byTousersInput, {nullable:false})
    @Type(() => postCreateWithoutUsers_post_updated_byTousersInput)
    create!: postCreateWithoutUsers_post_updated_byTousersInput;
}
