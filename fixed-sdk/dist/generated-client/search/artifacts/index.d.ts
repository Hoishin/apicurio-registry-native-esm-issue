import { ArtifactSortBy, SortOrder, ArtifactSearchResults } from '../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Search for artifacts in the registry.
 */
export interface ArtifactsRequestBuilder extends BaseRequestBuilder<ArtifactsRequestBuilder> {
    /**
     * Returns a paginated list of all artifacts that match the provided filter criteria.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArtifactSearchResults>}
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<ArtifactsRequestBuilderGetQueryParameters> | undefined): Promise<ArtifactSearchResults | undefined>;
    /**
     * Returns a paginated list of all artifacts with at least one version that matches theposted content.This operation can fail for the following reasons:* Provided content (request body) was empty (HTTP error `400`)* A server error occurred (HTTP error `500`)
     * @param body Binary request body
     * @param contentType The request body content type.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArtifactSearchResults>}
     * @throws {ProblemDetails} error when the service returns a 400 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    post(body: ArrayBuffer | undefined, contentType: string | undefined, requestConfiguration?: RequestConfiguration<ArtifactsRequestBuilderPostQueryParameters> | undefined): Promise<ArtifactSearchResults | undefined>;
    /**
     * Returns a paginated list of all artifacts that match the provided filter criteria.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<ArtifactsRequestBuilderGetQueryParameters> | undefined): RequestInformation;
    /**
     * Returns a paginated list of all artifacts with at least one version that matches theposted content.This operation can fail for the following reasons:* Provided content (request body) was empty (HTTP error `400`)* A server error occurred (HTTP error `500`)
     * @param body Binary request body
     * @param contentType The request body content type.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: ArrayBuffer | undefined, contentType: string | undefined, requestConfiguration?: RequestConfiguration<ArtifactsRequestBuilderPostQueryParameters> | undefined): RequestInformation;
}
/**
 * Returns a paginated list of all artifacts that match the provided filter criteria.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
 */
export interface ArtifactsRequestBuilderGetQueryParameters {
    /**
     * Filter by artifactId.
     */
    artifactId?: string;
    /**
     * Filter by artifact type (`AVRO`, `JSON`, etc).
     */
    artifactType?: string;
    /**
     * Filter by contentId.
     */
    contentId?: number;
    /**
     * Filter by description.
     */
    description?: string;
    /**
     * Filter by globalId.
     */
    globalId?: number;
    /**
     * Filter by artifact group.
     */
    groupId?: string;
    /**
     * Filter by one or more name/value label.  Separate each name/value pair using a colon.  Forexample `labels=foo:bar` will return only artifacts with a label named `foo`and value `bar`.
     */
    labels?: string[];
    /**
     * The number of artifacts to return.  Defaults to 20.
     */
    limit?: number;
    /**
     * Filter by artifact name.
     */
    name?: string;
    /**
     * The number of artifacts to skip before starting to collect the result set.  Defaults to 0.
     */
    offset?: number;
    /**
     * Sort order, ascending (`asc`) or descending (`desc`).
     */
    order?: SortOrder;
    /**
     * The field to sort by.  Can be one of:* `name`* `createdOn`
     */
    orderby?: ArtifactSortBy;
}
/**
 * Returns a paginated list of all artifacts with at least one version that matches theposted content.This operation can fail for the following reasons:* Provided content (request body) was empty (HTTP error `400`)* A server error occurred (HTTP error `500`)
 */
export interface ArtifactsRequestBuilderPostQueryParameters {
    /**
     * Indicates the type of artifact represented by the content being used for the search.  This is only needed when using the `canonical` query parameter, so that the server knows how to canonicalize the content prior to searching for matching artifacts.
     */
    artifactType?: string;
    /**
     * Parameter that can be set to `true` to indicate that the server should "canonicalize" the content when searching for matching artifacts.  Canonicalization is unique to each artifact type, but typically involves removing any extra whitespace and formatting the content in a consistent manner.  Must be used along with the `artifactType` query parameter.
     */
    canonical?: boolean;
    /**
     * Filter by artifact group.
     */
    groupId?: string;
    /**
     * The number of artifacts to return.  Defaults to 20.
     */
    limit?: number;
    /**
     * The number of artifacts to skip before starting to collect the result set.  Defaults to 0.
     */
    offset?: number;
    /**
     * Sort order, ascending (`asc`) or descending (`desc`).
     */
    order?: SortOrder;
    /**
     * The field to sort by.  Can be one of:* `name`* `createdOn`
     */
    orderby?: ArtifactSortBy;
}
/**
 * Uri template for the request builder.
 */
export declare const ArtifactsRequestBuilderUriTemplate = "{+baseurl}/search/artifacts{?artifactId*,artifactType*,canonical*,contentId*,description*,globalId*,groupId*,labels*,limit*,name*,offset*,order*,orderby*}";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const ArtifactsRequestBuilderRequestsMetadata: RequestsMetadata;
