import { Observable } from 'rxjs';

class AuthorizeService {

    obs: Observable<Twitch.ext.Authorized>;

    constructor() {
        this.obs = new Observable(sub => {
            Twitch.ext.onAuthorized(auth => {
                sub.next(auth)
                console.log(auth);
                Twitch.ext.rig.log(JSON.stringify(auth));
            });
        });

        this.init();
    }

    init() {
        Twitch.ext.actions.requestIdShare();
    }

}

export const authorizeService = new AuthorizeService();