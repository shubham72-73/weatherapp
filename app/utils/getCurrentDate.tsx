export const getCurrentDate = () => {
    const getCurrentDate = new Date().toLocaleString(
        'en-US', {
            weekday: "long",
            year: "numeric",
            month: "long",
            day:"numeric"
        });
        return getCurrentDate;
}