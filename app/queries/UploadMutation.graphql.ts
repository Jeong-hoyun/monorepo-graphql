/**
 * @generated SignedSource<<acfa26d8f211ec12601ef56c7783a70c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UploadMutation$variables = {
  contentType?: string | null;
  fileName: string;
};
export type UploadMutation$data = {
  readonly uploadURL: string | null;
};
export type UploadMutation = {
  response: UploadMutation$data;
  variables: UploadMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "contentType"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "fileName"
},
v2 = [
  {
    "alias": "uploadURL",
    "args": [
      {
        "kind": "Variable",
        "name": "contentType",
        "variableName": "contentType"
      },
      {
        "kind": "Variable",
        "name": "fileName",
        "variableName": "fileName"
      }
    ],
    "kind": "ScalarField",
    "name": "getUploadURL",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UploadMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "UploadMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "302d20d3f6edbb72dbb07d9431eb929c",
    "id": null,
    "metadata": {},
    "name": "UploadMutation",
    "operationKind": "mutation",
    "text": "mutation UploadMutation(\n  $fileName: String!\n  $contentType: String\n) {\n  uploadURL: getUploadURL(fileName: $fileName, contentType: $contentType)\n}\n"
  }
};
})();

(node as any).hash = "94565458336de3faade5557a49cdfd68";

export default node;
