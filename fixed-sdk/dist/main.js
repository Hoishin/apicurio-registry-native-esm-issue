import { apiClientProxifier as ne, ParseNodeFactoryRegistry as oe, SerializationWriterFactoryRegistry as re, AnonymousAuthenticationProvider as ie } from "@microsoft/kiota-abstractions";
import { KiotaClientFactory as se, RetryHandler as pe, RedirectHandler as de, ParametersNameDecodingHandler as ue, UserAgentHandler as le, HeadersInspectionHandler as ce, FetchRequestAdapter as ge } from "@microsoft/kiota-http-fetchlibrary";
import { JsonParseNodeFactory as me, JsonSerializationWriterFactory as ye } from "@microsoft/kiota-serialization-json";
function H(t) {
  return ze;
}
function p(t) {
  return Pe;
}
function V(t) {
  return Ee;
}
function Be(t) {
  return Ae;
}
function L(t) {
  return Ue;
}
function fe(t) {
  return we;
}
function F(t) {
  return We;
}
function G(t) {
  return xe;
}
function Me(t) {
  return $e;
}
function Te(t) {
  return He;
}
function Y(t) {
  return Le;
}
function _(t) {
  return Ge;
}
function n(t) {
  return Ye;
}
function a(t) {
  return k;
}
function J(t) {
  return _e;
}
function qe(t) {
  return Je;
}
function o(t) {
  return Ke;
}
function Ie(t) {
  return ke;
}
function K(t) {
  return Qe;
}
function Re(t) {
  return Xe;
}
function Ce(t) {
  return Ze;
}
function Ve(t) {
  return et;
}
function Ne(t) {
  return tt;
}
function Se(t) {
  return at;
}
function be(t) {
  return nt;
}
function he(t) {
  return ot;
}
function je(t) {
  return it;
}
function Fe(t) {
  return st;
}
function ve(t) {
  return rt;
}
function Oe(t) {
  return pt;
}
function N(t) {
  return dt;
}
function s(t) {
  return ut;
}
function De(t) {
  return lt;
}
function ze(t = {}) {
  return {
    artifactId: (e) => {
      t.artifactId = e.getStringValue();
    },
    artifactType: (e) => {
      t.artifactType = e.getStringValue();
    },
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    labels: (e) => {
      t.labels = e.getObjectValue(n);
    },
    modifiedBy: (e) => {
      t.modifiedBy = e.getStringValue();
    },
    modifiedOn: (e) => {
      t.modifiedOn = e.getDateValue();
    },
    name: (e) => {
      t.name = e.getStringValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    }
  };
}
function Pe(t = {}) {
  return {
    artifactId: (e) => {
      t.artifactId = e.getStringValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    name: (e) => {
      t.name = e.getStringValue();
    },
    version: (e) => {
      t.version = e.getStringValue();
    }
  };
}
function Ee(t = {}) {
  return {
    artifacts: (e) => {
      t.artifacts = e.getCollectionOfObjectValues(Re);
    },
    count: (e) => {
      t.count = e.getNumberValue();
    }
  };
}
function Ae(t = {}) {
  return {
    name: (e) => {
      t.name = e.getStringValue();
    }
  };
}
function Ue(t = {}) {
  return {
    artifactId: (e) => {
      t.artifactId = e.getStringValue();
    },
    branchId: (e) => {
      t.branchId = e.getStringValue();
    },
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    modifiedBy: (e) => {
      t.modifiedBy = e.getStringValue();
    },
    modifiedOn: (e) => {
      t.modifiedOn = e.getDateValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    },
    systemDefined: (e) => {
      t.systemDefined = e.getBooleanValue();
    }
  };
}
function we(t = {}) {
  return {
    branches: (e) => {
      t.branches = e.getCollectionOfObjectValues(Ce);
    },
    count: (e) => {
      t.count = e.getNumberValue();
    }
  };
}
function We(t = {}) {
  return {
    commentId: (e) => {
      t.commentId = e.getStringValue();
    },
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    },
    value: (e) => {
      t.value = e.getStringValue();
    }
  };
}
function xe(t = {}) {
  return {
    description: (e) => {
      t.description = e.getStringValue();
    },
    label: (e) => {
      t.label = e.getStringValue();
    },
    name: (e) => {
      t.name = e.getStringValue();
    },
    type: (e) => {
      t.type = e.getStringValue();
    },
    value: (e) => {
      t.value = e.getStringValue();
    }
  };
}
function $e(t = {}) {
  return {
    artifact: (e) => {
      t.artifact = e.getObjectValue(H);
    },
    version: (e) => {
      t.version = e.getObjectValue(N);
    }
  };
}
function He(t = {}) {
  return {
    downloadId: (e) => {
      t.downloadId = e.getStringValue();
    },
    href: (e) => {
      t.href = e.getStringValue();
    }
  };
}
function Le(t = {}) {
  return {
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    labels: (e) => {
      t.labels = e.getObjectValue(n);
    },
    modifiedBy: (e) => {
      t.modifiedBy = e.getStringValue();
    },
    modifiedOn: (e) => {
      t.modifiedOn = e.getDateValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    }
  };
}
function Ge(t = {}) {
  return {
    count: (e) => {
      t.count = e.getNumberValue();
    },
    groups: (e) => {
      t.groups = e.getCollectionOfObjectValues(Ve);
    }
  };
}
function Ye(t = {}) {
  return {};
}
function k(t = {}) {
  return {
    detail: (e) => {
      t.detail = e.getStringValue();
    },
    instance: (e) => {
      t.instance = e.getStringValue();
    },
    name: (e) => {
      t.nameEscaped = e.getStringValue();
    },
    status: (e) => {
      t.status = e.getNumberValue();
    },
    title: (e) => {
      t.title = e.getStringValue();
    },
    type: (e) => {
      t.type = e.getStringValue();
    }
  };
}
function _e(t = {}) {
  return {
    principalId: (e) => {
      t.principalId = e.getStringValue();
    },
    principalName: (e) => {
      t.principalName = e.getStringValue();
    },
    role: (e) => {
      t.role = e.getEnumValue(St);
    }
  };
}
function Je(t = {}) {
  return {
    count: (e) => {
      t.count = e.getNumberValue();
    },
    roleMappings: (e) => {
      t.roleMappings = e.getCollectionOfObjectValues(J);
    }
  };
}
function Ke(t = {}) {
  return {
    config: (e) => {
      t.config = e.getStringValue();
    },
    ruleType: (e) => {
      t.ruleType = e.getEnumValue(d);
    }
  };
}
function ke(t = {}) {
  return {
    context: (e) => {
      t.context = e.getStringValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    }
  };
}
function Qe(t = {}) {
  return {
    ...k(t),
    causes: (e) => {
      t.causes = e.getCollectionOfObjectValues(Ie);
    }
  };
}
function Xe(t = {}) {
  return {
    artifactId: (e) => {
      t.artifactId = e.getStringValue();
    },
    artifactType: (e) => {
      t.artifactType = e.getStringValue();
    },
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    labels: (e) => {
      t.labels = e.getObjectValue(n);
    },
    modifiedBy: (e) => {
      t.modifiedBy = e.getStringValue();
    },
    modifiedOn: (e) => {
      t.modifiedOn = e.getDateValue();
    },
    name: (e) => {
      t.name = e.getStringValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    }
  };
}
function Ze(t = {}) {
  return {
    artifactId: (e) => {
      t.artifactId = e.getStringValue();
    },
    branchId: (e) => {
      t.branchId = e.getStringValue();
    },
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    modifiedBy: (e) => {
      t.modifiedBy = e.getStringValue();
    },
    modifiedOn: (e) => {
      t.modifiedOn = e.getDateValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    },
    systemDefined: (e) => {
      t.systemDefined = e.getBooleanValue();
    }
  };
}
function et(t = {}) {
  return {
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    labels: (e) => {
      t.labels = e.getObjectValue(n);
    },
    modifiedBy: (e) => {
      t.modifiedBy = e.getStringValue();
    },
    modifiedOn: (e) => {
      t.modifiedOn = e.getDateValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    }
  };
}
function tt(t = {}) {
  return {
    artifactId: (e) => {
      t.artifactId = e.getStringValue();
    },
    artifactType: (e) => {
      t.artifactType = e.getStringValue();
    },
    contentId: (e) => {
      t.contentId = e.getNumberValue();
    },
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    globalId: (e) => {
      t.globalId = e.getNumberValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    labels: (e) => {
      t.labels = e.getObjectValue(n);
    },
    modifiedBy: (e) => {
      t.modifiedBy = e.getStringValue();
    },
    modifiedOn: (e) => {
      t.modifiedOn = e.getDateValue();
    },
    name: (e) => {
      t.name = e.getStringValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    },
    state: (e) => {
      t.state = e.getEnumValue(h);
    },
    version: (e) => {
      t.version = e.getStringValue();
    }
  };
}
function at(t = {}) {
  return {
    snapshotId: (e) => {
      t.snapshotId = e.getStringValue();
    }
  };
}
function nt(t = {}) {
  return {
    builtOn: (e) => {
      t.builtOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    name: (e) => {
      t.name = e.getStringValue();
    },
    version: (e) => {
      t.version = e.getStringValue();
    }
  };
}
function ot(t = {}) {
  return {
    admin: (e) => {
      t.admin = e.getBooleanValue();
    },
    developer: (e) => {
      t.developer = e.getBooleanValue();
    },
    displayName: (e) => {
      t.displayName = e.getStringValue();
    },
    username: (e) => {
      t.username = e.getStringValue();
    },
    viewer: (e) => {
      t.viewer = e.getBooleanValue();
    }
  };
}
function rt(t = {}) {
  return {
    auth: (e) => {
      t.auth = e.getObjectValue(je);
    },
    features: (e) => {
      t.features = e.getObjectValue(Fe);
    },
    ui: (e) => {
      t.ui = e.getObjectValue(Oe);
    }
  };
}
function it(t = {}) {
  return {
    obacEnabled: (e) => {
      t.obacEnabled = e.getBooleanValue();
    },
    options: (e) => {
      t.options = e.getObjectValue(n);
    },
    rbacEnabled: (e) => {
      t.rbacEnabled = e.getBooleanValue();
    },
    type: (e) => {
      t.type = e.getEnumValue(bt);
    }
  };
}
function st(t = {}) {
  return {
    breadcrumbs: (e) => {
      t.breadcrumbs = e.getBooleanValue();
    },
    deleteArtifact: (e) => {
      t.deleteArtifact = e.getBooleanValue();
    },
    deleteGroup: (e) => {
      t.deleteGroup = e.getBooleanValue();
    },
    deleteVersion: (e) => {
      t.deleteVersion = e.getBooleanValue();
    },
    draftMutability: (e) => {
      t.draftMutability = e.getBooleanValue();
    },
    readOnly: (e) => {
      t.readOnly = e.getBooleanValue();
    },
    roleManagement: (e) => {
      t.roleManagement = e.getBooleanValue();
    },
    settings: (e) => {
      t.settings = e.getBooleanValue();
    }
  };
}
function pt(t = {}) {
  return {
    contextPath: (e) => {
      t.contextPath = e.getStringValue();
    },
    navPrefixPath: (e) => {
      t.navPrefixPath = e.getStringValue();
    },
    oaiDocsUrl: (e) => {
      t.oaiDocsUrl = e.getStringValue();
    }
  };
}
function dt(t = {}) {
  return {
    artifactId: (e) => {
      t.artifactId = e.getStringValue();
    },
    artifactType: (e) => {
      t.artifactType = e.getStringValue();
    },
    contentId: (e) => {
      t.contentId = e.getNumberValue();
    },
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    globalId: (e) => {
      t.globalId = e.getNumberValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    labels: (e) => {
      t.labels = e.getObjectValue(n);
    },
    modifiedBy: (e) => {
      t.modifiedBy = e.getStringValue();
    },
    modifiedOn: (e) => {
      t.modifiedOn = e.getDateValue();
    },
    name: (e) => {
      t.name = e.getStringValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    },
    state: (e) => {
      t.state = e.getEnumValue(h);
    },
    version: (e) => {
      t.version = e.getStringValue();
    }
  };
}
function ut(t = {}) {
  return {
    count: (e) => {
      t.count = e.getNumberValue();
    },
    versions: (e) => {
      t.versions = e.getCollectionOfObjectValues(Ne);
    }
  };
}
function lt(t = {}) {
  return {
    state: (e) => {
      t.state = e.getEnumValue(h);
    }
  };
}
function ct(t, e = {}) {
  e && (t.writeStringValue("version", e.version), t.writeAdditionalData(e.additionalData));
}
function gt(t, e = {}) {
  e && (t.writeStringValue("artifactId", e.artifactId), t.writeStringValue("groupId", e.groupId), t.writeStringValue("name", e.name), t.writeStringValue("version", e.version), t.writeAdditionalData(e.additionalData));
}
function mt(t, e = {}) {
  e && (t.writeStringValue("artifactId", e.artifactId), t.writeStringValue("artifactType", e.artifactType), t.writeStringValue("description", e.description), t.writeObjectValue("firstVersion", e.firstVersion, Q), t.writeObjectValue("labels", e.labels, r), t.writeStringValue("name", e.name), t.writeAdditionalData(e.additionalData));
}
function yt(t, e = {}) {
  e && (t.writeStringValue("branchId", e.branchId), t.writeStringValue("description", e.description), t.writeCollectionOfPrimitiveValues("versions", e.versions), t.writeAdditionalData(e.additionalData));
}
function Bt(t, e = {}) {
  e && (t.writeStringValue("description", e.description), t.writeStringValue("groupId", e.groupId), t.writeObjectValue("labels", e.labels, r), t.writeAdditionalData(e.additionalData));
}
function S(t, e = {}) {
  e && (t.writeStringValue("config", e.config), t.writeEnumValue("ruleType", e.ruleType), t.writeAdditionalData(e.additionalData));
}
function Q(t, e = {}) {
  e && (t.writeCollectionOfPrimitiveValues("branches", e.branches), t.writeObjectValue("content", e.content, Z), t.writeStringValue("description", e.description), t.writeBooleanValue("isDraft", e.isDraft), t.writeObjectValue("labels", e.labels, r), t.writeStringValue("name", e.name), t.writeStringValue("version", e.version), t.writeAdditionalData(e.additionalData));
}
function ft(t, e = {}) {
  e && (t.writeStringValue("description", e.description), t.writeObjectValue("labels", e.labels, r), t.writeStringValue("name", e.name), t.writeStringValue("owner", e.owner), t.writeAdditionalData(e.additionalData));
}
function Mt(t, e = {}) {
  e && (t.writeStringValue("description", e.description), t.writeAdditionalData(e.additionalData));
}
function Tt(t, e = {}) {
  e && (t.writeStringValue("description", e.description), t.writeObjectValue("labels", e.labels, r), t.writeAdditionalData(e.additionalData));
}
function qt(t, e = {}) {
  e && (t.writeStringValue("description", e.description), t.writeObjectValue("labels", e.labels, r), t.writeStringValue("name", e.name), t.writeAdditionalData(e.additionalData));
}
function r(t, e = {}) {
  e && t.writeAdditionalData(e.additionalData);
}
function X(t, e = {}) {
  e && (t.writeStringValue("value", e.value), t.writeAdditionalData(e.additionalData));
}
function It(t, e = {}) {
  e && (t.writeCollectionOfPrimitiveValues("versions", e.versions), t.writeAdditionalData(e.additionalData));
}
function Rt(t, e = {}) {
  e && (t.writeStringValue("principalId", e.principalId), t.writeStringValue("principalName", e.principalName), t.writeEnumValue("role", e.role), t.writeAdditionalData(e.additionalData));
}
function b(t, e = {}) {
  e && (t.writeStringValue("config", e.config), t.writeEnumValue("ruleType", e.ruleType), t.writeAdditionalData(e.additionalData));
}
function Ct(t, e = {}) {
  e && (t.writeStringValue("value", e.value), t.writeAdditionalData(e.additionalData));
}
function Vt(t, e = {}) {
  e && (t.writeEnumValue("role", e.role), t.writeAdditionalData(e.additionalData));
}
function Z(t, e = {}) {
  e && (t.writeStringValue("content", e.content), t.writeStringValue("contentType", e.contentType), t.writeCollectionOfObjectValues("references", e.references, gt), t.writeAdditionalData(e.additionalData));
}
function Nt(t, e = {}) {
  e && (t.writeEnumValue("state", e.state), t.writeAdditionalData(e.additionalData));
}
const St = {
  READ_ONLY: "READ_ONLY",
  DEVELOPER: "DEVELOPER",
  ADMIN: "ADMIN"
}, d = {
  VALIDITY: "VALIDITY",
  COMPATIBILITY: "COMPATIBILITY",
  INTEGRITY: "INTEGRITY"
}, bt = {
  None: "none",
  Basic: "basic",
  Oidc: "oidc"
}, h = {
  ENABLED: "ENABLED",
  DISABLED: "DISABLED",
  DEPRECATED: "DEPRECATED",
  DRAFT: "DRAFT"
}, ht = "{+baseurl}/admin/config/artifactTypes", jt = {
  get: {
    uriTemplate: ht,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "sendCollection",
    responseBodyFactory: Be
  }
}, u = "{+baseurl}/admin/config/properties/{propertyName}", Ft = {
  delete: {
    uriTemplate: u,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: u,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: G
  },
  put: {
    uriTemplate: u,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: Ct,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, vt = "{+baseurl}/admin/config/properties", Ot = {
  byPropertyName: {
    requestsMetadata: Ft,
    pathParametersMappings: ["propertyName"]
  }
}, Dt = {
  get: {
    uriTemplate: vt,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "sendCollection",
    responseBodyFactory: G
  }
}, zt = {
  artifactTypes: {
    requestsMetadata: jt
  },
  properties: {
    requestsMetadata: Dt,
    navigationMetadata: Ot
  }
}, Pt = "{+baseurl}/admin/export{?forBrowser*}", Et = {
  get: {
    uriTemplate: Pt,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: Te
  }
}, At = "{+baseurl}/admin/import{?requireEmptyRegistry*}", Ut = {
  post: {
    uriTemplate: At,
    responseBodyContentType: "application/json",
    errorMappings: {
      409: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/zip",
    requestInformationContentSetMethod: "setStreamContent"
  }
}, l = "{+baseurl}/admin/roleMappings/{principalId}", wt = {
  delete: {
    uriTemplate: l,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: l,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: J
  },
  put: {
    uriTemplate: l,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: Vt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, v = "{+baseurl}/admin/roleMappings{?limit*,offset*}", Wt = {
  byPrincipalId: {
    requestsMetadata: wt,
    pathParametersMappings: ["principalId"]
  }
}, xt = {
  get: {
    uriTemplate: v,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: qe
  },
  post: {
    uriTemplate: v,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: Rt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, c = "{+baseurl}/admin/rules/{ruleType}", $t = {
  delete: {
    uriTemplate: c,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: c,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: o
  },
  put: {
    uriTemplate: c,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: o,
    requestBodyContentType: "application/json",
    requestBodySerializer: b,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, g = "{+baseurl}/admin/rules", Ht = {
  byRuleType: {
    requestsMetadata: $t,
    pathParametersMappings: ["ruleType"]
  }
}, Lt = {
  delete: {
    uriTemplate: g,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: g,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "sendCollectionOfEnum",
    enumObject: d
  },
  post: {
    uriTemplate: g,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      409: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: S,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, Gt = "{+baseurl}/admin/snapshots", Yt = {
  post: {
    uriTemplate: Gt,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: Se
  }
}, _t = {
  config: {
    navigationMetadata: zt
  },
  exportEscaped: {
    requestsMetadata: Et
  },
  importEscaped: {
    requestsMetadata: Ut
  },
  roleMappings: {
    requestsMetadata: xt,
    navigationMetadata: Wt
  },
  rules: {
    requestsMetadata: Lt,
    navigationMetadata: Ht
  },
  snapshots: {
    requestsMetadata: Yt
  }
}, m = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/branches/{branchId}/versions{?limit*,offset*}", Jt = {
  get: {
    uriTemplate: m,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: s
  },
  post: {
    uriTemplate: m,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      409: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: ct,
    requestInformationContentSetMethod: "setContentFromParsable"
  },
  put: {
    uriTemplate: m,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: It,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, y = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/branches/{branchId}", Kt = {
  versions: {
    requestsMetadata: Jt
  }
}, kt = {
  delete: {
    uriTemplate: y,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      409: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: y,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: L
  },
  put: {
    uriTemplate: y,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: Mt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, O = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/branches{?limit*,offset*}", Qt = {
  byBranchId: {
    requestsMetadata: kt,
    navigationMetadata: Kt,
    pathParametersMappings: ["branchId"]
  }
}, Xt = {
  get: {
    uriTemplate: O,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: fe
  },
  post: {
    uriTemplate: O,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      409: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: L,
    requestBodyContentType: "application/json",
    requestBodySerializer: yt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, B = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/rules/{ruleType}", Zt = {
  delete: {
    uriTemplate: B,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: B,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: o
  },
  put: {
    uriTemplate: B,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: o,
    requestBodyContentType: "application/json",
    requestBodySerializer: b,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, f = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/rules", ea = {
  byRuleType: {
    requestsMetadata: Zt,
    pathParametersMappings: ["ruleType"]
  }
}, ta = {
  delete: {
    uriTemplate: f,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: f,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendCollectionOfEnum",
    enumObject: d
  },
  post: {
    uriTemplate: f,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      409: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: S,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, D = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions/{versionExpression}/comments/{commentId}", aa = {
  delete: {
    uriTemplate: D,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  put: {
    uriTemplate: D,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: X,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, z = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions/{versionExpression}/comments", na = {
  byCommentId: {
    requestsMetadata: aa,
    pathParametersMappings: ["commentId"]
  }
}, oa = {
  get: {
    uriTemplate: z,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      500: a
    },
    adapterMethodName: "sendCollection",
    responseBodyFactory: F
  },
  post: {
    uriTemplate: z,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: F,
    requestBodyContentType: "application/json",
    requestBodySerializer: X,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, P = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions/{versionExpression}/content{?references*}", ra = {
  get: {
    uriTemplate: P,
    responseBodyContentType: "*/*, application/json",
    errorMappings: {
      400: a,
      404: a,
      500: a
    },
    adapterMethodName: "sendPrimitive",
    responseBodyFactory: "ArrayBuffer"
  },
  put: {
    uriTemplate: P,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      405: a,
      409: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: Z,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, ia = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions/{versionExpression}/references{?refType*}", sa = {
  get: {
    uriTemplate: ia,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      500: a
    },
    adapterMethodName: "sendCollection",
    responseBodyFactory: p
  }
}, E = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions/{versionExpression}/state{?dryRun*}", pa = {
  get: {
    uriTemplate: E,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: De
  },
  put: {
    uriTemplate: E,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      409: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: Nt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, M = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions/{versionExpression}", da = {
  comments: {
    requestsMetadata: oa,
    navigationMetadata: na
  },
  content: {
    requestsMetadata: ra
  },
  references: {
    requestsMetadata: sa
  },
  state: {
    requestsMetadata: pa
  }
}, ua = {
  delete: {
    uriTemplate: M,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      405: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: M,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: N
  },
  put: {
    uriTemplate: M,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: qt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, A = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions{?dryRun*,limit*,offset*,order*,orderby*}", la = {
  byVersionExpression: {
    requestsMetadata: ua,
    navigationMetadata: da,
    pathParametersMappings: ["versionExpression"]
  }
}, ca = {
  get: {
    uriTemplate: A,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: s
  },
  post: {
    uriTemplate: A,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      409: K,
      422: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: N,
    requestBodyContentType: "application/json",
    requestBodySerializer: Q,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, T = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}", ga = {
  branches: {
    requestsMetadata: Xt,
    navigationMetadata: Qt
  },
  rules: {
    requestsMetadata: ta,
    navigationMetadata: ea
  },
  versions: {
    requestsMetadata: ca,
    navigationMetadata: la
  }
}, ma = {
  delete: {
    uriTemplate: T,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      405: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: T,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: H
  },
  put: {
    uriTemplate: T,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: ft,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, q = "{+baseurl}/groups/{groupId}/artifacts{?canonical*,dryRun*,ifExists*,limit*,offset*,order*,orderby*}", ya = {
  byArtifactId: {
    requestsMetadata: ma,
    navigationMetadata: ga,
    pathParametersMappings: ["artifactId"]
  }
}, Ba = {
  delete: {
    uriTemplate: q,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: q,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: V
  },
  post: {
    uriTemplate: q,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      409: K,
      422: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: Me,
    requestBodyContentType: "application/json",
    requestBodySerializer: mt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, I = "{+baseurl}/groups/{groupId}/rules/{ruleType}", fa = {
  delete: {
    uriTemplate: I,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: I,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: o
  },
  put: {
    uriTemplate: I,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: o,
    requestBodyContentType: "application/json",
    requestBodySerializer: b,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, R = "{+baseurl}/groups/{groupId}/rules", Ma = {
  byRuleType: {
    requestsMetadata: fa,
    pathParametersMappings: ["ruleType"]
  }
}, Ta = {
  delete: {
    uriTemplate: R,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: R,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendCollectionOfEnum",
    enumObject: d
  },
  post: {
    uriTemplate: R,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      409: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: S,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, C = "{+baseurl}/groups/{groupId}", qa = {
  artifacts: {
    requestsMetadata: Ba,
    navigationMetadata: ya
  },
  rules: {
    requestsMetadata: Ta,
    navigationMetadata: Ma
  }
}, Ia = {
  delete: {
    uriTemplate: C,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      405: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: C,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: Y
  },
  put: {
    uriTemplate: C,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: Tt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, U = "{+baseurl}/groups{?limit*,offset*,order*,orderby*}", Ra = {
  byGroupId: {
    requestsMetadata: Ia,
    navigationMetadata: qa,
    pathParametersMappings: ["groupId"]
  }
}, Ca = {
  get: {
    uriTemplate: U,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: _
  },
  post: {
    uriTemplate: U,
    responseBodyContentType: "application/json",
    errorMappings: {
      409: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: Y,
    requestBodyContentType: "application/json",
    requestBodySerializer: Bt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, Va = "{+baseurl}/ids/contentHashes/{contentHash}/references", Na = {
  get: {
    uriTemplate: Va,
    responseBodyContentType: "application/json",
    adapterMethodName: "sendCollection",
    responseBodyFactory: p
  }
}, Sa = "{+baseurl}/ids/contentHashes/{contentHash}", ba = {
  references: {
    requestsMetadata: Na
  }
}, ha = {
  get: {
    uriTemplate: Sa,
    responseBodyContentType: "*/*, application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendPrimitive",
    responseBodyFactory: "ArrayBuffer"
  }
}, ja = {
  byContentHash: {
    requestsMetadata: ha,
    navigationMetadata: ba,
    pathParametersMappings: ["contentHash"]
  }
}, Fa = "{+baseurl}/ids/contentIds/{contentId}/references", va = {
  get: {
    uriTemplate: Fa,
    responseBodyContentType: "application/json",
    adapterMethodName: "sendCollection",
    responseBodyFactory: p
  }
}, Oa = "{+baseurl}/ids/contentIds/{contentId}", Da = {
  references: {
    requestsMetadata: va
  }
}, za = {
  get: {
    uriTemplate: Oa,
    responseBodyContentType: "*/*, application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendPrimitive",
    responseBodyFactory: "ArrayBuffer"
  }
}, Pa = {
  byContentId: {
    requestsMetadata: za,
    navigationMetadata: Da,
    pathParametersMappings: ["contentId"]
  }
}, Ea = "{+baseurl}/ids/globalIds/{globalId}/references{?refType*}", Aa = {
  get: {
    uriTemplate: Ea,
    responseBodyContentType: "application/json",
    adapterMethodName: "sendCollection",
    responseBodyFactory: p
  }
}, Ua = "{+baseurl}/ids/globalIds/{globalId}{?references*,returnArtifactType*}", wa = {
  references: {
    requestsMetadata: Aa
  }
}, Wa = {
  get: {
    uriTemplate: Ua,
    responseBodyContentType: "*/*, application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendPrimitive",
    responseBodyFactory: "ArrayBuffer"
  }
}, xa = {
  byGlobalId: {
    requestsMetadata: Wa,
    navigationMetadata: wa,
    pathParametersMappings: ["globalId"]
  }
}, $a = {
  contentHashes: {
    navigationMetadata: ja
  },
  contentIds: {
    navigationMetadata: Pa
  },
  globalIds: {
    navigationMetadata: xa
  }
}, w = "{+baseurl}/search/artifacts{?artifactId*,artifactType*,canonical*,contentId*,description*,globalId*,groupId*,labels*,limit*,name*,offset*,order*,orderby*}", Ha = {
  get: {
    uriTemplate: w,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: V
  },
  post: {
    uriTemplate: w,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: V,
    requestInformationContentSetMethod: "setStreamContent"
  }
}, La = "{+baseurl}/search/groups{?description*,groupId*,labels*,limit*,offset*,order*,orderby*}", Ga = {
  get: {
    uriTemplate: La,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: _
  }
}, W = "{+baseurl}/search/versions{?artifactId*,artifactType*,canonical*,contentId*,description*,globalId*,groupId*,labels*,limit*,name*,offset*,order*,orderby*,state*,version*}", Ya = {
  get: {
    uriTemplate: W,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: s
  },
  post: {
    uriTemplate: W,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: s,
    requestInformationContentSetMethod: "setStreamContent"
  }
}, _a = {
  artifacts: {
    requestsMetadata: Ha
  },
  groups: {
    requestsMetadata: Ga
  },
  versions: {
    requestsMetadata: Ya
  }
}, Ja = "{+baseurl}/system/info", Ka = {
  get: {
    uriTemplate: Ja,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: be
  }
}, ka = "{+baseurl}/system/uiConfig", Qa = {
  get: {
    uriTemplate: ka,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: ve
  }
}, Xa = {
  info: {
    requestsMetadata: Ka
  },
  uiConfig: {
    requestsMetadata: Qa
  }
}, Za = "{+baseurl}/users/me", en = {
  get: {
    uriTemplate: Za,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: he
  }
}, tn = {
  me: {
    requestsMetadata: en
  }
};
function an(t) {
  const e = {
    baseurl: t.baseUrl
  };
  return ne(t, e, nn, void 0);
}
const pn = "{+baseurl}", nn = {
  admin: {
    navigationMetadata: _t
  },
  groups: {
    requestsMetadata: Ca,
    navigationMetadata: Ra
  },
  ids: {
    navigationMetadata: $a
  },
  search: {
    navigationMetadata: _a
  },
  system: {
    navigationMetadata: Xa
  },
  users: {
    navigationMetadata: tn
  }
}, ee = new oe(), x = new me();
ee.contentTypeAssociatedFactories.set(x.getValidContentType(), x);
const te = new re(), $ = new ye();
te.contentTypeAssociatedFactories.set($.getValidContentType(), $);
class dn {
  static createRegistryClient(e, i) {
    e.endsWith("/") && (e = e.substring(0, e.length - 1)), i == null && (i = new ie());
    const ae = se.create(void 0, [
      new pe(),
      new de(),
      new ue(),
      new le(),
      new ce()
    ]), j = new ge(i, ee, te, ae);
    return j.baseUrl = e, an(j);
  }
}
export {
  nn as ApicurioRegistryClientNavigationMetadata,
  pn as ApicurioRegistryClientUriTemplate,
  dn as RegistryClientFactory,
  an as createApicurioRegistryClient
};
