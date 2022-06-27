import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Users_permissionsCountAggregate } from './users-permissions-count-aggregate.output';
import { Users_permissionsAvgAggregate } from './users-permissions-avg-aggregate.output';
import { Users_permissionsSumAggregate } from './users-permissions-sum-aggregate.output';
import { Users_permissionsMinAggregate } from './users-permissions-min-aggregate.output';
import { Users_permissionsMaxAggregate } from './users-permissions-max-aggregate.output';

@ObjectType()
export class AggregateUsers_permissions {

    @Field(() => Users_permissionsCountAggregate, {nullable:true})
    _count?: Users_permissionsCountAggregate;

    @Field(() => Users_permissionsAvgAggregate, {nullable:true})
    _avg?: Users_permissionsAvgAggregate;

    @Field(() => Users_permissionsSumAggregate, {nullable:true})
    _sum?: Users_permissionsSumAggregate;

    @Field(() => Users_permissionsMinAggregate, {nullable:true})
    _min?: Users_permissionsMinAggregate;

    @Field(() => Users_permissionsMaxAggregate, {nullable:true})
    _max?: Users_permissionsMaxAggregate;
}
