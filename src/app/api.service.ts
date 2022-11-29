import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
    fetchProduct = () => {
      return this.http.get("https://dummyjson.com/products")
    }

    fetchQuotes = () => {
      return this.http.get("https://dummyjson.com/quotes")
    }

    fetchTodo = () => {
      return this.http.get("https://dummyjson.com/todos")
    }

    fetchUS = () => {
      return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    }

    fetchUserData = () => {
      return this.http.get("https://dummyjson.com/users")
    }

    fetchUserInfo = () => {
      return this.http.get("https://reqres.in/api/users?page=1")
    }
    
    fetchWebTools = () => {
      return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30")
    }
}
