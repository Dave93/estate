import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_created_byInput } from '../users/users-update-one-without-users-permissions-users-tousers-permissions-created-by.input';
import { permissionsUpdateOneRequiredWithoutUsers_permissionsInput } from '../permissions/permissions-update-one-required-without-users-permissions.input';
import { usersUpdateOneRequiredWithoutUsers_permissions_usersTousers_permissions_user_idInput } from '../users/users-update-one-required-without-users-permissions-users-tousers-permissions-user-id.input';

@InputType()
export class users_permissionsUpdateWithoutUsers_usersTousers_permissions_updated_byInput {

    @Field(() => usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_created_byInput, {nullable:true})
    users_usersTousers_permissions_created_by?: usersUpdateOneWithoutUsers_permissions_usersTousers_permissions_created_byInput;

    @Field(() => permissionsUpdateOneRequiredWithoutUsers_permissionsInput, {nullable:true})
    permissions?: permissionsUpdateOneRequiredWithoutUsers_permissionsInput;

    @Field(() => usersUpdateOneRequiredWithoutUsers_permissions_usersTousers_permissions_user_idInput, {nullable:true})
    users_usersTousers_permissions_user_id?: usersUpdateOneRequiredWithoutUsers_permissions_usersTousers_permissions_user_idInput;
}
