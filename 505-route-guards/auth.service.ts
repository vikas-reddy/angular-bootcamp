import { ActivatedRouteSnapshot } from '@angular/router';

export class AuthService {

  currentUserHasAccessTo(route: ActivatedRouteSnapshot) {
    // Pretend there's lots of logic here to decide if the
    // current user is allowed to access the specified route.

    // Change this from `true` to `false` to see how it affects
    // routing to 'admin'.
    return true;
  }
}
