/**
 * @param {string} title - The initial title of the note
 * @param {string} tags - Initial tags as a string, if any
 * @returns {{title: string, tags: string}}
 */
module.exports = (opts) => {
  const now = new Date();
  const formattedDate = now.toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  return {
    title: `Daily Note - ${formattedDate}`,
    tags: `daily, ${formattedDate.replace(/-/g, '')}`, // Remove hyphens for tag consistency
  };
};