const brokerElasticPropertyArray = {
    dataField: [
        "connector.title_de",
        "connector.title_en",
        "connector.title",
        "connector.title.keyword",
        "connector.title_en.keyword",
        "connector.title_de.keyword",
        "connector.description",
        "connector.description_en",
        "connector.description_de",
        "connector.description_en.keyword",
        "connector.description_de.keyword",
        "connector.description.keyword",
        "connector.inboundModelVersions",
        "connector.outboundModelVersion",
        "connector.securityProfile",
        "provider.maintainer",
        "provider.curator",
        "resources.title",
        "resources.title.keyword",
        "resources.title_en",
        "resources.title_en.keyword",
        "resources.title_de",
        "resources.title_de.keyword",
        "resources.keyword",
        "resources.keyword.keyword",
        "resources.description_en",
        "resources.description_en.keyword",
        "resources.description",
        "resources.description.keyword",
        "resources.description_de",
        "resources.description_de.keyword",
        "resources.language",
        "resources.customLicense",
        "resources.standardLicense"
    ],
    fieldWeights: [
        //search weight for the fields
        // 3 - connector's title and description
        // 4 - resources title and description
        // 1 - all URI's in connector's, provider's, and resources attributes
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        3,
        1,
        1,
        1,
        1,
        1,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4
    ],
    highlightField: [
        "connector.description",
        "connector.title",
        "connector.title_en",
        "connector.title_de",
        "resource.title",
        "resource.description_en",
        "resource.keywords",
    ]
}

const parisElasticPropertyArray = {
    dataField: [
        "participant.title",
        "participant.description"
    ],
    fieldWeights: [
        1,
        1
    ],
    highlightField: [
        "participant.title",
        "participant.description"
    ]
}

const fhgElasticPropertyArray = {
    dataField: [
        "resources.mainTitle",
        "resources.mainTitle.keyword",
        "resources.title_en",
        "resources.title_en.keyword",
        "resources.title",
        "resources.title.keyword",
        "resources.title_de",
        "resources.title_de.keyword",
        "resource.description_en",
        "resource.description_en.keyword",
        "resource.description_de",
        "resource.description_de.keyword",
        "resource.description",
        "resource.description.keyword",
        "resources.keyword",
        "resources.keyword.keyword",
        "resources.representation.instance.filename",
        "resources.customLicense",
        "resources.customLicense.keyword",
        "resources.standardLicense",
        "resources.standardLicense.keyword"
    ],
    fieldWeights: [
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        9,
        8,
        8,
        8,
        8,
        8,
        8,
        7,
        7,
        6,
        5,
        5,
        5,
        5
    ],
    highlightField: [
        "resources.mainTitle",
        "resources.title",
    ]
}

const mobidsElasticPropertyArray = {
    dataField: [
        "resources.title_en",
        "resources.title_en.keyword",
        "resources.title",
        "resources.title.keyword",
        "resources.title_de",
        "resources.title_de.keyword",
        "resources.description_en",
        "resources.description_en.keyword",
        "resources.description_de",
        "resources.description_de.keyword",
        "resources.description",
        "resources.description.keyword",
        "resources.keyword",
        "resources.keyword.keyword",
        "resources.customLicense",
        "resources.customLicense.keyword",
        "resources.standardLicense",
        "resources.standardLicense.keyword",
        "resources.labelStandardLicense.keyword",
        "resources.labelStandardLicense",
        "connector.title_de",
        "connector.title_en",
        "connector.title",
        "connector.title.keyword",
        "connector.title_en.keyword",
        "connector.title_de.keyword",
        "connector.description",
        "connector.description_en",
        "connector.description_de",
        "connector.description_en.keyword",
        "connector.description_de.keyword",
        "connector.description.keyword",
        "connector.inboundModelVersions",
        "connector.outboundModelVersion",
        "connector.securityProfile",
        "provider.maintainer",
        "provider.curator",
                "title_en",
                "title_en.keyword",
                "title",
                "title.keyword",
                "title_de",
                "title_de.keyword",
                "description_en",
                "description_en.keyword",
                "description_de",
                "description_de.keyword",
                "description",
                "description.keyword",
                "keyword",
                "keyword.keyword",
                "customLicense",
                "customLicense.keyword",
                "standardLicense",
                "standardLicense.keyword",
                "labelStandardLicense.keyword",
                "labelStandardLicense"
    ],
    fieldWeights: [
        9,
        9,
        9,
        9,
        9,
        9,
        8,
        8,
        8,
        8,
        8,
        8,
        7,
        7,
        5,
        5,
        5,
        5,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        4,
        9,
                9,
                9,
                9,
                9,
                9,
                8,
                8,
                8,
                8,
                8,
                8,
                7,
                7,
                5,
                5,
                5,
                                5,
                                5,
                                5,
                                5
    ],
    highlightField: [
        "resources.title"
    ]
}

export const propertyArray = {
    'paris': parisElasticPropertyArray,
    'eis': brokerElasticPropertyArray,
    'fhg': fhgElasticPropertyArray,
    'mobids': mobidsElasticPropertyArray
}