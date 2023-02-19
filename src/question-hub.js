import { HubConnectionBuilder } from "@microsoft/signalr";

const connection = new HubConnectionBuilder()
                    .withUrl('https://localhost:7132/question-hub')
                    .build()
connection.start()
    
export default connection;
