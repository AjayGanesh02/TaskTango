#include <ArduinoHttpClient.h>
#include <WiFi101.h>
#include <ArduinoJson.h>

char ssid[] = "SpartaHack";
char pwd[] = "SpartansWill";

char serverAddress[] = "100.25.147.177";
int port = 8080;

WiFiClient wifi;
HttpClient client = HttpClient(wifi, serverAddress, port);
int status = WL_IDLE_STATUS;

String json_serialized;

void setup() {
  WiFi.setPins(8,7,4,2);

  Serial.begin(9600);
  while ( status != WL_CONNECTED) {
    Serial.print("Attempting to connect to Network named: ");
    Serial.println(ssid);                   // print the network name (SSID);

    // Connect to WPA/WPA2 network:
    status = WiFi.begin(ssid, pwd);
  }

  // print the SSID of the network you're attached to:
  Serial.print("SSID: ");
  Serial.println(WiFi.SSID());

  // print your WiFi shield's IP address:
  IPAddress ip = WiFi.localIP(); // ?taskName=trash&phone=xxxxxxxxx
  Serial.print("IP Address: ");
  Serial.println(ip);

  // Initialize client
  // http.begin(client, "http://100.25.147.177:8080/groups");

  DynamicJsonDocument doc(1024);

  doc["group_name"] = "TaskTango Devs";
  doc["initial_user"] = "arschallwig@gmail.com";

  serializeJson(doc, json_serialized);

  Serial.println(json_serialized); 
}

void loop() {
  Serial.println("making POST request");

  client.post("/groups", "application/json", json_serialized);

  Serial.println("Wait five seconds");
  delay(60000);
}
