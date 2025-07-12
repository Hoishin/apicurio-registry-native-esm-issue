import { SortOrder, CreateVersion, VersionMetaData, VersionSearchResults, VersionSortBy } from '../../../../../models/index.js';
import { WithVersionExpressionItemRequestBuilder } from './item/index.js';
import { BaseRequestBuilder, KeysToExcludeForNavigationMetadata, NavigationMetadata, RequestConfiguration, RequestInformation, RequestsMetadata } from '@microsoft/kiota-abstractions';
/**
 * Manage all the versions of an artifact in the registry.
 */
export interface VersionsRequestBuilder extends BaseRequestBuilder<VersionsRequestBuilder> {
    /**
     * Manage a single version of a single artifact in the registry.
     * @param versionExpression An expression resolvable to a specific version ID within the given group and artifact. The following rules apply: - If the expression is in the form "branch={branchId}", and artifact branch {branchId} exists: The expression is resolved to a version that the branch points to. - Otherwise: The expression is resolved to a version with the same ID, which must follow the "[a-zA-Z0-9._//-+]{1,256}" pattern.
     * @returns {WithVersionExpressionItemRequestBuilder}
     */
    byVersionExpression(versionExpression: string): WithVersionExpressionItemRequestBuilder;
    /**
     * Returns a list of all versions of the artifact.  The result set is paged.This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<VersionSearchResults>}
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    get(requestConfiguration?: RequestConfiguration<VersionsRequestBuilderGetQueryParameters> | undefined): Promise<VersionSearchResults | undefined>;
    /**
     * Creates a new version of the artifact by uploading new content.  The configured rules forthe artifact are applied, and if they all pass, the new content is added as the most recent version of the artifact.  If any of the rules fail, an error is returned.The body of the request can be the raw content of the new artifact version, or the raw content and a set of references pointing to other artifacts, and the typeof that content should match the artifact's type (for example if the artifact type is `AVRO`then the content of the request should be an Apache Avro document).This operation can fail for the following reasons:* Provided content (request body) was empty (HTTP error `400`)* An invalid version number was provided (HTTP error `400`)* No artifact with this `artifactId` exists (HTTP error `404`)* The new content violates one of the rules configured for the artifact (HTTP error `409`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<VersionMetaData>}
     * @throws {ProblemDetails} error when the service returns a 400 status code
     * @throws {ProblemDetails} error when the service returns a 404 status code
     * @throws {RuleViolationProblemDetails} error when the service returns a 409 status code
     * @throws {ProblemDetails} error when the service returns a 422 status code
     * @throws {ProblemDetails} error when the service returns a 500 status code
     */
    post(body: CreateVersion, requestConfiguration?: RequestConfiguration<VersionsRequestBuilderPostQueryParameters> | undefined): Promise<VersionMetaData | undefined>;
    /**
     * Returns a list of all versions of the artifact.  The result set is paged.This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toGetRequestInformation(requestConfiguration?: RequestConfiguration<VersionsRequestBuilderGetQueryParameters> | undefined): RequestInformation;
    /**
     * Creates a new version of the artifact by uploading new content.  The configured rules forthe artifact are applied, and if they all pass, the new content is added as the most recent version of the artifact.  If any of the rules fail, an error is returned.The body of the request can be the raw content of the new artifact version, or the raw content and a set of references pointing to other artifacts, and the typeof that content should match the artifact's type (for example if the artifact type is `AVRO`then the content of the request should be an Apache Avro document).This operation can fail for the following reasons:* Provided content (request body) was empty (HTTP error `400`)* An invalid version number was provided (HTTP error `400`)* No artifact with this `artifactId` exists (HTTP error `404`)* The new content violates one of the rules configured for the artifact (HTTP error `409`)* A server error occurred (HTTP error `500`)
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
    toPostRequestInformation(body: CreateVersion, requestConfiguration?: RequestConfiguration<VersionsRequestBuilderPostQueryParameters> | undefined): RequestInformation;
}
/**
 * Returns a list of all versions of the artifact.  The result set is paged.This operation can fail for the following reasons:* No artifact with this `artifactId` exists (HTTP error `404`)* A server error occurred (HTTP error `500`)
 */
export interface VersionsRequestBuilderGetQueryParameters {
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
     * The field to sort by.  Can be one of:* `name`* `version`* `createdOn`
     */
    orderby?: VersionSortBy;
}
/**
 * Creates a new version of the artifact by uploading new content.  The configured rules forthe artifact are applied, and if they all pass, the new content is added as the most recent version of the artifact.  If any of the rules fail, an error is returned.The body of the request can be the raw content of the new artifact version, or the raw content and a set of references pointing to other artifacts, and the typeof that content should match the artifact's type (for example if the artifact type is `AVRO`then the content of the request should be an Apache Avro document).This operation can fail for the following reasons:* Provided content (request body) was empty (HTTP error `400`)* An invalid version number was provided (HTTP error `400`)* No artifact with this `artifactId` exists (HTTP error `404`)* The new content violates one of the rules configured for the artifact (HTTP error `409`)* A server error occurred (HTTP error `500`)
 */
export interface VersionsRequestBuilderPostQueryParameters {
    /**
     * When set to `true`, the operation will not result in any changes. Instead, itwill return a result based on whether the operation **would have succeeded**.
     */
    dryRun?: boolean;
}
/**
 * Uri template for the request builder.
 */
export declare const VersionsRequestBuilderUriTemplate = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions{?dryRun*,limit*,offset*,order*,orderby*}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export declare const VersionsRequestBuilderNavigationMetadata: Record<Exclude<keyof VersionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata>;
/**
 * Metadata for all the requests in the request builder.
 */
export declare const VersionsRequestBuilderRequestsMetadata: RequestsMetadata;
