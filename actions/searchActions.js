const types = require("../constants/ActionTypes.js");
// import * as types from "../constants/ActionTypes";

const searchTracks = (query) => ({ type: types.SEARCH_TRACKS, query });
const searchTracksSuccess = (query, results) => ({
  type: types.SEARCH_TRACKS_SUCCESS,
  query,
  results,
});
const searchTracksReset = () => ({ type: types.SEARCH_TRACKS_RESET });
const fetchTrack = (id) => ({ type: types.FETCH_TRACK, id });
const fetchTrackSuccess = (id, track) => ({
  type: types.FETCH_TRACK_SUCCESS,
  id,
});

module.exports = {
  searchTracks,
  searchTracksSuccess,
  searchTracksReset,
  fetchTrack,
  fetchTrackSuccess,
};
