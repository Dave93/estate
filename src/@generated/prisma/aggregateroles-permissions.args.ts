import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roles_permissionsWhereInput } from '../roles-permissions/roles-permissions-where.input';
import { Type } from 'class-transformer';
import { roles_permissionsOrderByWithRelationInput } from '../roles-permissions/roles-permissions-order-by-with-relation.input';
import { roles_permissionsWhereUniqueInput } from '../roles-permissions/roles-permissions-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregaterolesPermissionsArgs {

    @Field(() => roles_permissionsWhereInput, {nullable:true})
    @Type(() => roles_permissionsWhereInput)
    where?: roles_permissionsWhereInput;

    @Field(() => [roles_permissionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<roles_permissionsOrderByWithRelationInput>;

    @Field(() => roles_permissionsWhereUniqueInput, {nullable:true})
    cursor?: roles_permissionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
