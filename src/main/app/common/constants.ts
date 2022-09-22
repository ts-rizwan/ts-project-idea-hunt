import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Constants {      
    public static siteTitle: string = "Idea Hunt";
    public static supportEmail: string = "support@techno-soft.com";
    public static invalidEmailRoute: string = 'auth/invalid-email';
    public static wrongPasswordRoute: string = 'auth/wrong-password';
    public static notFoundRoute: string = 'auth/user-not-found';
}
