export const Section = ({ title, children }) => (
    <section className="section">
        <h2 className="sectionTitle">{title}</h2>
        {children}
    </section>
)