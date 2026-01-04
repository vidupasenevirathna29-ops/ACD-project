import { useParams, Link } from "react-router-dom";
import data from "../data/properties.json";
import PropertyGallery from "../components/PropertyGallery";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function PropertyPage() {
  const { id } = useParams();
  const property = data.properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div style={{ padding: "20px" }}>
        <p>Property not found.</p>
        <Link to="/">← Back to search</Link>
      </div>
    );
  }

  const mapQuery = encodeURIComponent(property.location);

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <Link to="/">← Back to search</Link>

      <h1>
        {property.type} – £{property.price.toLocaleString()}
      </h1>
      <p>{property.location}</p>
      <p>{property.bedrooms} bedrooms · Tenure: {property.tenure}</p>

      {/* Gallery */}
      <section style={{ margin: "20px 0" }}>
        <PropertyGallery property={property} />
      </section>

      {/* Tabs */}
      <Tabs>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Floor plan</Tab>
          <Tab>Map</Tab>
        </TabList>

        <TabPanel>
          <h2>Description</h2>
          <p>{property.description}</p>
        </TabPanel>

        <TabPanel>
          <h2>Floor plan</h2>
          <img
            src={property.floorplan || "/images/floorplan-placeholder.jpg"}
            alt="Floor plan"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </TabPanel>

        <TabPanel>
          <h2>Location map</h2>
          <iframe
            title="location-map"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            style={{ width: "100%", height: "300px", borderRadius: "8px", border: 0 }}
            loading="lazy"
          ></iframe>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default PropertyPage;
