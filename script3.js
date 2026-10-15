const stages={
 ingest:{title:"Stage 01 — Ingest: get the data, don't lose it",text:"I build ingestion that survives reality: batch, streaming, and change-data-capture feeds landing reliably from apps, databases, and event streams — with schema handling up front, not apologies later.",chips:["Apache Kafka","AWS Kinesis","Azure Event Hubs","Qlik Replicate / CDC","Sqoop","Fivetran","Schema Registry"]},
 process:{title:"Stage 02 — Process: shape it at scale",text:"Spark is home turf. I tune PySpark and SQL workloads — partitioning, bucketing, broadcast joins, caching, adaptive query execution — so big jobs finish faster and cost less.",chips:["Apache Spark","PySpark","Azure Databricks","Spark Streaming","Scala","Flink","AWS Glue"]},
 store:{title:"Stage 03 — Store: one trusted copy",text:"Lakehouse storage with ACID guarantees and dimensional models where they earn their keep. Incremental loads, SCD patterns, and warehouses tuned for the queries people actually run.",chips:["Delta Lake","Apache Iceberg","Snowflake","Redshift","Synapse","S3 / ADLS Gen2","Star Schema","SCD Type 1/2"]},
 serve:{title:"Stage 04 — Serve: data people (and models) use",text:"The point of it all: features for ML models, datasets behind BI, and APIs for downstream systems — tracked in MLflow, visualized in Power BI, and governed end to end.",chips:["MLflow","Feature Stores","Power BI","FastAPI / Flask","Unity Catalog","Purview","Great Expectations"]}
};
const panel=document.getElementById("stagePanel");
function renderStage(k){const s=stages[k];panel.innerHTML=`<h3>${s.title}</h3><p>${s.text}</p><div class="chips">${s.chips.map(c=>`<span class="chip">${c}</span>`).join("")}</div>`}
document.querySelectorAll(".node").forEach(n=>n.addEventListener("click",()=>{document.querySelectorAll(".node").forEach(x=>x.classList.remove("active"));n.classList.add("active");renderStage(n.dataset.stage)}));
renderStage("ingest");

const answers={
 who:`> SELECT * FROM engineer;\n name          : Raj Kumar M\n role          : Data Scientist & Data Engineer\n base          : McKinney / Dallas, TX\n experience    : ~6 years, 5 industries\n current       : Data Scientist @ Digital Realty\n status        : RUNNING — and open to the next run`,
 skills:`> SELECT stack FROM skills;\n languages     : Python, SQL, PySpark, Scala\n streaming     : Kafka, Kinesis, Event Hubs\n clouds        : AWS, Azure, GCP\n lakehouse     : Databricks, Delta Lake, Snowflake\n ops           : Airflow, Terraform, GitHub Actions\n ml/bi         : MLflow, Power BI`,
 impact:`> SELECT impact FROM career;\n - Feature pipelines that let ML teams train on data they trust\n - Kafka ecosystems built for low-latency, high-volume events\n - PySpark/SQL jobs tuned to run faster on smaller cloud bills\n - Legacy ETL estates migrated to cloud-native platforms\n - Data quality frameworks that catch bad data before dashboards do`,
 contact:`> SELECT contact FROM engineer;\n email         : rajkumarmaddoju04@gmail.com\n phone         : +1 (214) 799-0556\n linkedin      : linkedin.com/in/rajkumarmaddoju04\n github        : github.com/rajkm0811\n -- 1 row returned. Say hello.`
};
const out=document.getElementById("termOut");let timer;
function typeOut(text){clearInterval(timer);let i=0;out.textContent="";timer=setInterval(()=>{out.textContent=text.slice(0,i+=3);if(i>=text.length)clearInterval(timer)},10)}
document.querySelectorAll("[data-q]").forEach(b=>b.addEventListener("click",()=>typeOut(answers[b.dataset.q])));
typeOut(answers.who);

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".section,.hero,.run,.systems li").forEach(el=>{el.classList.add("reveal");io.observe(el)});
document.getElementById("year").textContent=new Date().getFullYear();
