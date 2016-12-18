export class Preferencies {
    public avatarUrl: string;
    public preferredLang: string;

    public constructor( data: any = {}) {
        this.avatarUrl = data.avatarUrl || '';
        this.preferredLang = data.preferredLang || null;
    }

}
