import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  getBookingsByEmailId(emailId: string) {
    const url = `${this.apiUrl}/getAllBookings/${emailId}`;
    return this.http.get<any[]>(url);
  }

  cancelBookMovie(emailId: string, bookingId: number) {
    const url = `${this.apiUrl}/CancelBookMovie/${emailId}`;
    return this.http.put<number>(url, bookingId);
  }

  getBookingById(bookingId: number) {
    const url = `${this.apiUrl}/bookMovie/${bookingId}`;
    return this.http.get<any>(url);
  }
}
