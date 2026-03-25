import Text "mo:core/Text";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  let applications = Map.empty<Text, Text>();

  public shared ({ caller }) func addApplication(applicationNumber : Text, applicantName : Text) : async () {
    if (applications.containsKey(applicationNumber)) {
      Runtime.trap("Application number already exists. ");
    };
    applications.add(applicationNumber, applicantName);
  };

  public query ({ caller }) func lookupApplication(applicationNumber : Text) : async ?Text {
    applications.get(applicationNumber);
  };
};
