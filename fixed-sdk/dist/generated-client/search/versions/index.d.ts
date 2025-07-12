import { SortOrder, VersionSearchResults, VersionSortBy, VersionState } from '../../models/index.js';
import { BaseRequestBuilder, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Search for versions in the registry.
 */
export interface VersionsRequestBuilder extends BaseRequestBuilder<VersionsRequestBuilder> {
    /**
     * Returns a paginated list of all versions that match the provided filter criteria.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<VersionSearchResults>}
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<VersionsRequestBuilderGetQueryParameters> | undefined): Promise<VersionSearchResults | undefined>;
    /**
     * Returns a paginated list of all versions that match the posted content.This operation can fail for the following reasons:* Provided content (request body) was empty (HTTP error `400`)* A server error occurred (HTTP error `500`)
     * @param body Binary request body
     * @param contentType The request body content type.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<VersionSearchResults>}
     * @throws {ProblemDetails} error when the service returns a 400 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    post(body: ArrayBuffer | undefined, contentType: string | undefined, requestConfiguration?: RequestConfiguration<VersionsRequestBuilderPostQueryParameters> | undefined): Promise<VersionSearchResults | undefined>;
    /**
     * Returns a paginated list of all versions that match the provided filter criteria.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<VersionsRequestBuilderGetQueryParameters> | undefined): RequestInformation;
    /**
     * Returns a paginated list of all versions that match the posted content.This operation can fail for the following reasons:* Provided content (request body) was empty (HTTP error `400`)* A server error occurred (HTTP error `500`)
     * @param body Binary request body
     * @param contentType The request body content type.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: ArrayBuffer | undefined, contentType: string | undefined, requestConfiguration?: RequestConfiguration<VersionsRequestBuilderPostQueryParameters> | undefined): RequestInformation;
}
/**
 * Returns a paginated list of all versions that match the provided filter criteria.This operation can fail for the following reasons:* A server error occurred (HTTP error `500`)
 */
export interface VersionsRequestBuilderGetQueryParameters {
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
     * The number of versions to return.  Defaults to 20.
     */
    limit?: number;
    /**
     * Filter by name.
     */
    name?: string;
    /**
     * The number of versions to skip before starting to collect the result set.  Defaults to 0.
     */
    offset?: number;
    /**
     * Sort order, ascending (`asc`) or descending (`desc`).
     */
    order?: SortOrder;
    /**
     * The field to sort by.  Can be one of:* `name`* `createdOn`
     */
    orderby?: VersionSortBy;
    /**
     * Filter by version state.
     */
    state?: VersionState;
    /**
     * Filter by version number.
     */
    version?: string;
}
/**
 * Returns a paginated list of all versions that match the posted content.This operation can fail for the following reasons:* Provided content (request body) was empty (HTTP error `400`)* A server error occurred (HTTP error `500`)
 */
export interface VersionsRequestBuilderPostQueryParameters {
    /**
     * Filter by artifact Id.
     */
    artifactId?: string;
    /**
     * Indicates the type of artifact represented by the content being used for the search.  This is only needed when using the `canonical` query parameter, so that the server knows how to canonicalize the content prior to searching for matching versions.
     */
    artifactType?: string;
    /**
     * Parameter that can be set to `true` to indicate that the server should "canonicalize" the content when searching for matching artifacts.  Canonicalization is unique to each artifact type, but typically involves removing any extra whitespace and formatting the content in a consistent manner.  Must be used along with the `artifactType` query parameter.
     */
    canonical?: boolean;
    /**
     * Filter by group Id.
     */
    groupId?: string;
    /**
     * The number of versions to return.  Defaults to 20.
     */
    limit?: number;
    /**
     * The number of versions to skip before starting to collect the result set.  Defaults to 0.
     */
    offset?: number;
    /**
     * Sort order, ascending (`asc`) or descending (`desc`).
     */
    order?: SortOrder;
    /**
     * The field to sort by.  Can be one of:* `name`* `createdOn`
     */
    orderby?: VersionSortBy;
}
/**
 * Uri template for the request builder.
 */
export declare const VersionsRequestBuilderUriTemplate = "{+baseurl}/search/versions{?artifactId*,artifactType*,canonical*,contentId*,description*,globalId*,groupId*,labels*,limit*,name*,offset*,order*,orderby*,state*,version*}";
/**
 * Metadata for all the requests in the request builder.
 */
export declare const VersionsRequestBuilderRequestsMetadata: RequestsMetadata;
