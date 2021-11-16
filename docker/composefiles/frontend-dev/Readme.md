This is the running environment for the frontend development.

## Run
```sh
docker-compose up
```

Then you could start the frontend app for deployment.

## Add Data
You can send a **POST** or **PUT** request to `http"//localhost:8080/connectors/` to register or update a connector. The data will be indexed in elasticsearch so that the frontend could get such information.

### Request Headers 

`ids-securityToken` : This can be achieved from `http://localhost:8080/token` endpoint.

`ids-senderAgent` : http://senderAgent.org/ (for example)

`ids-modelVersion` : 4.0.0 

`ids-issued` : 2020-09-17T13:20:00Z 

`ids-issuerConnector` : https://broker.ids.isst.fraunhofer.de/

### Request Body

{
  "@context" : {
    "ids" : "https://w3id.org/idsa/core/",
    "idsc" : "https://w3id.org/idsa/code/"
  },
  "@type" : "ids:BaseConnector",
  "@id" : "https://broker.ids.isst.fraunhofer.de/",
  "ids:outboundModelVersion" : "4.0.0",
  "ids:securityProfile" : {
    "@id" : "idsc:BASE_SECURITY_PROFILE"
  },
  "ids:maintainer" : {
    "@id" : "https://example.org/"
  },
  "ids:curator" : {
    "@id" : "https://example.org/"
  },
  "ids:resourceCatalog" : [ {
    "@type" : "ids:ResourceCatalog",
    "@id" : "https://w3id.org/idsa/autogen/resourceCatalog/1d81b2b8-7085-403c-8092-57d222f6c8a2",
    "ids:offeredResource" : [ {
      "@type" : "ids:Resource",
      "@id" : "https://w3id.org/idsa/autogen/resource/637498c9-0578-405d-a13b-f1ced7d71c31",
      "ids:language" : [ {
        "@id" : "idsc:DE"
      }, {
        "@id" : "idsc:ES"
      } ],
      "ids:version" : "v0.0.1",
      "ids:description" : [ {
        "@value" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
        "@type" : "http://www.w3.org/2001/XMLSchema#string"
      } ],
      "ids:resourceEndpoint" : [ {
        "@type" : "ids:ConnectorEndpoint",
        "@id" : "https://w3id.org/idsa/autogen/connectorEndpoint/72ea010a-2608-4328-bf9c-a9ee63f22108",
        "ids:path" : "a Static endpoint path",
        "ids:outboundPath" : "a static outbound path",
        "ids:inboundPath" : "a static inbound path",
        "ids:accessURL" : {
          "@id" : "http://example.org/accessURL"
        },
        "ids:endpointArtifact" : {
          "@type" : "ids:Artifact",
          "@id" : "https://w3id.org/idsa/autogen/artifact/7db2fbdd-bcba-44fe-aa8d-5e1b5333dfe6",
          "ids:fileName" : "staticfile.txt",
          "ids:byteSize" : 150,
          "ids:creationDate" : {
            "@value" : "2000-10-15T00:00:00.000Z",
            "@type" : "http://www.w3.org/2001/XMLSchema#dateTimeStamp"
          },
          "ids:checkSum" : "artifact checksum"
        }
      } ],
      "ids:contractOffer" : [ {
        "@type" : "ids:ContractOffer",
        "@id" : "https://w3id.org/idsa/autogen/contractOffer/b7e66697-2100-4d82-9f09-ffc0cab15aab",
        "ids:permission" : [ {
          "@type" : "ids:Permission",
          "@id" : "https://w3id.org/idsa/autogen/permission/7e1216cf-2896-4d88-a9ff-9808a03aa0cf",
          "ids:description" : [ {
            "@value" : "permission description",
            "@type" : "http://www.w3.org/2001/XMLSchema#string"
          } ],
          "ids:title" : [ {
            "@value" : "permission title",
            "@type" : "http://www.w3.org/2001/XMLSchema#string"
          } ],
          "ids:action" : [ {
            "@id" : "idsc:READ"
          } ],
          "ids:preDuty" : [ {
            "@type" : "ids:Duty",
            "@id" : "https://w3id.org/idsa/autogen/duty/1d8423ad-9054-4d81-ab2e-4713ebfeb5f1",
            "ids:description" : [ {
              "@value" : "Description of the pre-duty",
              "@type" : "http://www.w3.org/2001/XMLSchema#string"
            } ],
            "ids:title" : [ {
              "@value" : "Title Pre-Duty",
              "@type" : "http://www.w3.org/2001/XMLSchema#string"
            } ],
            "ids:action" : [ {
              "@id" : "idsc:ANONYMIZE"
            } ],
            "ids:constraint" : [ {
              "@type" : "ids:Constraint",
              "@id" : "https://w3id.org/idsa/autogen/constraint/3a31fa19-0818-4bc9-bf97-4d00825560d9",
              "ids:rightOperand" : {
                "@value" : "5"
              },
              "ids:operator" : {
                "@id" : "idsc:EQUALS"
              },
              "ids:unit" : {
                "@id" : "http://example.org/unit"
              },
              "ids:leftOperand" : {
                "@id" : "idsc:QUANTITY"
              }
            } ],
            "ids:assigner" : [ {
              "@id" : "http://example.org/preDutyAssigner"
            } ],
            "ids:assignee" : [ {
              "@id" : "http://example.org/preDutyAssignee"
            } ]
          } ],
          "ids:constraint" : [ {
            "@type" : "ids:Constraint",
            "@id" : "https://w3id.org/idsa/autogen/constraint/792d7120-187f-4d0b-9bad-a8f7514125c5",
            "ids:rightOperand" : {
              "@value" : "200"
            },
            "ids:operator" : {
              "@id" : "idsc:EQUALS"
            },
            "ids:unit" : {
              "@id" : "http://example.org/unit"
            },
            "ids:leftOperand" : {
              "@id" : "idsc:PAY_AMOUNT"
            }
          } ],
          "ids:assigner" : [ {
            "@id" : "https://example.org/someDuplicateAssignee"
          } ],
          "ids:assignee" : [ {
            "@id" : "https://example.org/someDuplicateAssignee"
          } ]
        } ],
        "ids:provider" : {
          "@id" : "http://provider.org"
        },
        "ids:consumer" : {
          "@id" : "http://consumer.org"
        },
        "ids:contractEnd" : {
          "@value" : "2001-06-19T00:00:00.000Z",
          "@type" : "http://www.w3.org/2001/XMLSchema#dateTimeStamp"
        },
        "ids:contractDate" : {
          "@value" : "2000-07-30T00:00:00.000Z",
          "@type" : "http://www.w3.org/2001/XMLSchema#dateTimeStamp"
        },
        "ids:prohibition" : [ {
          "@type" : "ids:Prohibition",
          "@id" : "https://w3id.org/idsa/autogen/prohibition/2828be9f-c49b-47cb-b077-3f0d3f23db33",
          "ids:description" : [ {
            "@value" : "prohibition description",
            "@type" : "http://www.w3.org/2001/XMLSchema#string"
          } ],
          "ids:title" : [ {
            "@value" : "prohibition title",
            "@type" : "http://www.w3.org/2001/XMLSchema#string"
          } ],
          "ids:action" : [ {
            "@id" : "idsc:DISTRIBUTE"
          } ],
          "ids:constraint" : [ {
            "@type" : "ids:Constraint",
            "@id" : "https://w3id.org/idsa/autogen/constraint/32b4df83-ca62-43ba-9259-1d4c7dafc2ae",
            "ids:rightOperand" : {
              "@value" : "24 months"
            },
            "ids:operator" : {
              "@id" : "idsc:DEFINES_AS"
            },
            "ids:unit" : {
              "@id" : "http://example.org/unit"
            },
            "ids:leftOperand" : {
              "@id" : "idsc:POLICY_EVALUATION_TIME"
            }
          } ],
          "ids:assigner" : [ {
            "@id" : "http://example.org/assigner1"
          }, {
            "@id" : "http://example.org/assigner2"
          } ],
          "ids:assignee" : [ {
            "@id" : "http://example.org/assignee1"
          }, {
            "@id" : "http://example.org/assignee2"
          } ]
        } ],
        "ids:contractStart" : {
          "@value" : "2000-10-20T00:00:00.000Z",
          "@type" : "http://www.w3.org/2001/XMLSchema#dateTimeStamp"
        },
        "ids:contractDocument" : {
          "@type" : "ids:TextResource",
          "@id" : "https://w3id.org/idsa/autogen/textResource/5b4b9ba6-a1a8-4220-91fc-cb921e752bc0",
          "ids:description" : [ {
            "@value" : "Description of the textual contract document",
            "@type" : "http://www.w3.org/2001/XMLSchema#string"
          } ],
          "ids:title" : [ {
            "@value" : "Title of the textual contract document",
            "@type" : "http://www.w3.org/2001/XMLSchema#string"
          } ]
        }
      } ],
      "ids:keyword" : [ {
        "@value" : "demo",
        "@type" : "http://www.w3.org/2001/XMLSchema#string"
      }, {
        "@value" : "test",
        "@type" : "http://www.w3.org/2001/XMLSchema#string"
      } ],
      "ids:contentType" : {
        "@id" : "idsc:SCHEMA_DEFINITION"
      },
      "ids:representation" : [ {
        "@type" : "ids:TextRepresentation",
        "@id" : "https://w3id.org/idsa/autogen/textRepresentation/baadd911-4e4f-4393-a689-dcf37ad45fca",
        "ids:instance" : [ {
          "@type" : "ids:Artifact",
          "@id" : "https://w3id.org/idsa/autogen/artifact/287ced34-deb3-4d2e-8607-ba9fb7b617f5",
          "ids:fileName" : "data.pdf",
          "ids:byteSize" : 2678,
          "ids:creationDate" : {
            "@value" : "2015-10-15T00:00:00.000Z",
            "@type" : "http://www.w3.org/2001/XMLSchema#dateTimeStamp"
          }
        } ],
        "ids:mediaType" : {
          "@type" : "ids:IANAMediaType",
          "@id" : "https://w3id.org/idsa/autogen/iANAMediaType/6d86cf65-350f-4895-a02c-3a40cf2275d7",
          "ids:filenameExtension" : "pdf"
        },
        "ids:representationStandard" : {
          "@id" : "http://textRepresentation.org"
        }
      } ],
      "ids:contentStandard" : {
        "@id" : "http://contentstandard.org"
      },
      "ids:standardLicense" : {
        "@id" : "http://example.org/license"
      },
      "ids:customLicense" : {
        "@id" : "http://customlicense.org"
      },
      "ids:title" : [ {
        "@value" : "Title of the resource offered by the Connector",
        "@type" : "http://www.w3.org/2001/XMLSchema#string"
      } ]
    }, {
      "@type" : "ids:Resource",
      "@id" : "https://w3id.org/idsa/autogen/resource/4fab9815-014d-46bb-9ef0-26c20738e52e",
      "ids:language" : [ {
        "@id" : "idsc:FR"
      }, {
        "@id" : "idsc:EN"
      } ],
      "ids:version" : "1.1",
      "ids:description" : [ {
        "@value" : "Multiple number of resources could be offered by the connectors",
        "@type" : "http://www.w3.org/2001/XMLSchema#string"
      }, {
        "@value" : "provide more description of this resource",
        "@type" : "http://www.w3.org/2001/XMLSchema#string"
      } ],
      "ids:keyword" : [ {
        "@value" : "broker",
        "@type" : "http://www.w3.org/2001/XMLSchema#string"
      }, {
        "@value" : "metadata",
        "@type" : "http://www.w3.org/2001/XMLSchema#string"
      } ],
      "ids:contentType" : {
        "@id" : "idsc:SCHEMA_DEFINITION"
      },
      "ids:title" : [ {
        "@value" : "Title of another resource offered by the Connector",
        "@type" : "http://www.w3.org/2001/XMLSchema#string"
      }, {
        "@value" : "Extending title",
        "@type" : "http://www.w3.org/2001/XMLSchema#string"
      } ]
    } ]
  } ],
  "ids:description" : [ {
    "@value" : "This is a dummy description from the Interaction Library",
    "@type" : "http://www.w3.org/2001/XMLSchema#string"
  } ],
  "ids:title" : [ {
    "@value" : "This is a dummy title from the Interaction Library",
    "@type" : "http://www.w3.org/2001/XMLSchema#string"
  } ],
  "ids:inboundModelVersion" : [ "4.0.0" ]
}

(as raw text)