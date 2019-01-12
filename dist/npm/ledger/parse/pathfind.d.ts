import { GetPaths, JbcoindPathsResponse } from '../pathfind-types';
declare function parsePathfind(pathfindResult: JbcoindPathsResponse): GetPaths;
export default parsePathfind;
