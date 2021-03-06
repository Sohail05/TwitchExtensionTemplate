import { Observable } from 'rxjs';

class ContextService {

    obs: Observable<{ context: Partial<Twitch.ext.Context>, changedField: any }>;

    constructor() {
        this.obs = new Observable(sub => {
            Twitch.ext.onContext((context, changedField) => {
                sub.next({ context, changedField })
                Twitch.ext.rig.log(JSON.stringify({ context, changedField }));
            });
        });

    }

}


export const contextService = new ContextService();