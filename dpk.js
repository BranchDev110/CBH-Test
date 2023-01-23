const crypto = require("crypto");

// exports.deterministicPartitionKey = (event) => {
//   const TRIVIAL_PARTITION_KEY = "0";
//   const MAX_PARTITION_KEY_LENGTH = 256;
//   let candidate;

//   if (event) {
//     if (event.partitionKey) {
//       candidate = event.partitionKey;
//     } else {
//       const data = JSON.stringify(event);
//       candidate = crypto.createHash("sha3-512").update(data).digest("hex");
//     }
//   }

//   if (candidate) {
//     if (typeof candidate !== "string") {
//       candidate = JSON.stringify(candidate);
//     }
//   } else {
//     candidate = TRIVIAL_PARTITION_KEY;
//   }
//   if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
//     candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
//   }
//   return candidate;
// };

exports.deterministicPartitionKey = (event) => {
  //This function is used to calculate a deterministic partition key for an event
  const TRIVIAL_PARTITION_KEY = "0"; //This defines the trivial partition key as 0
  const MAX_PARTITION_KEY_LENGTH = 256; //This defines the maximum length of the partition key
  let candidate = TRIVIAL_PARTITION_KEY; //This sets the candidate to the trivial partition key

  if( event ) { //This checks whether an event has been passed in
    candidate = event.partitionKey; //This sets the candidate to the partition key of the event
    if (!candidate) { //This checks whether the candidate has been set
      const data = JSON.stringify(event); //This creates a string version of the event
      candidate = crypto.createHash("sha3-512").update(data).digest("hex"); //This creates a hash of the event data
    }

    if(typeof candidate !== "string") candidate = JSON.stringify(candidate); //This checks whether the candidate is a string and converts it to a string if not

    if (candidate.length > MAX_PARTITION_KEY_LENGTH) { //This checks whether the candidate is longer than the maximum length
      candidate = crypto.createHash("sha3-512").update(candidate).digest("hex"); //This creates a hash of the candidate if it is too long
    }
  }

  return candidate; //This returns the candidate as the partition key
};